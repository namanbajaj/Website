export interface CertificationModel {
  id: number,
  title: string,
  company: React.JSX.Element,
  date: string,
  link: string,
  type: "coursework" | "certification"
}