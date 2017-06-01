import { getPosts } from 'disqus'

let subscriptions = []


let strategyTask = null;

const sleep = miliseconds => new Promise((resolve) => {
    setTimeout(resolve, miliseconds)
})

export const cache = {}

let buffering = true
let strategySubs = []
const strategy = async (subs) => {
    if (buffering) {
        strategySubs = [...strategySubs, ...subs]
    }

    await sleep(100);
    if (strategyTask) {
        return;
    }

    const task = async () => {
        const data = await getPosts()
        return data.response.reduce((acc, x) => ({
            ...acc,
            [x.link]: x.posts
        }), {})
    }

    buffering = false
    strategyTask = task;

    const result = await task();
    strategySubs.forEach((subscription) => {
        const value = result[subscription.postId]
        cache[subscription.postId] = value
        subscription.subscriber(value)
    })

    strategyTask = null;
    strategySubs = []
    buffering = true
}

const unsubscribe = (subscription) => {
    subscriptions = subscriptions.filter(x => x !== subscription)
}

const subscribe = (postId, subscriber) => {
    const subscription = {
        postId,
        subscriber
    }

    subscriptions = [...subscriptions, subscription]

    strategy(subscriptions);

    if (cache[postId] !== undefined) {
        subscriber(cache[postId])
    }

    return () => unsubscribe(subscription)
}

export const comments = postId => subscriber =>
    subscribe(postId, subscriber)

export default {
    comments
}
