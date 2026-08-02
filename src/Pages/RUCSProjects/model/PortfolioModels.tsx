export interface ProjectModel {
  id: number,
  image: string;
  title: string;
  icons: React.JSX.Element;
  text: string[];
  isNotable: boolean;
  type: string;
  dateOfLastUpdate: string;
  dateOfFirstUpdate: string;
  links?: LinkItem[];
  github?: string;
  demo?: string;
}

export interface LinkItem {
  icon: React.JSX.Element;
  value: string
}