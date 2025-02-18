export interface TProject {
  title: string
  image: string
  description: string
  github: string
  live: string
  features?: string[]
  technologies: {
    frontend?: string
    backend?: string
    database?: string
    paymentGateway?: string
    deployment?: string
  }
}
