import { projects } from 'resume'
import data from 'projects'

const apps = projects.reduce(
  (acc, curr) => ({
    ...acc,
    [curr.key]: {
      ...curr,
      ...data[curr.key]
    }
  }),
  {}
)

const {
  sandtime,
  koronaKrulow,
  promegle,
  testyPrawoJazdy,
  kwejk,
  ratingSpeed,
  iAmRich,

  storePro,
  musicTube,
  pogaduszki,
  apkaTv,

  classicGames
} = apps

export default {
  sandtime,
  koronaKrulow,
  promegle,
  testyPrawoJazdy,
  kwejk,
  ratingSpeed,
  iAmRich,

  storePro,
  musicTube,
  pogaduszki,
  apkaTv,

  classicGames
}
