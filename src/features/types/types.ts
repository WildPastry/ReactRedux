// export interface Todo {
//   id: string,
//   completed: boolean
//   text: string
// }
export interface Todo {
  id: string,
  name: string,
  fields: any[],
  client: string,
  timeline: string,
  website: string,
  thumb: any[],
  images: [{ src: string, id: string }],
  icons: [{ src: string, id: string }],
  intro: string,
  desc: string,
  url: string,
  git: string,
  gitUrl: string,
  completed: boolean
}