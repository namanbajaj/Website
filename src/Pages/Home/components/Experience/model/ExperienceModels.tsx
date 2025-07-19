export interface ExperienceCardItem {
  id: number,
  title: string,
  subtitle: string,
  date: string,
  description: React.JSX.Element,
  icon: string,
  do_multi_page?: boolean
}