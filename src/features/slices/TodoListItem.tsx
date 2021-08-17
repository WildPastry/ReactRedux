import React from 'react'

interface TodoProps {
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
  completed: boolean,
  onClick: () => any
}

export default function TodoListItem({ completed, desc, onClick }: TodoProps) {
  return (
    <li
    onClick={onClick}
      style={{
        color: 'white',
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {desc}
    </li>
  )
}