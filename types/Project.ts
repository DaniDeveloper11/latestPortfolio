export interface Project {
    id: number
    name: string
    description: string
    technologies: string[]
    techName:string []
    status: 'Complete' | 'In Progress' | 'Pending' // ajustable según tus estados
    href: string
  }