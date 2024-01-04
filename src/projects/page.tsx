import { Project, columns } from './columns';
import { ProjectTable } from './project.table';

const data: Project[] = [
  {
    id: '728ed52f',
    projectName: 'Projekt1',
    numberOfConfigurations: 69,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt2',
    numberOfConfigurations: 1,
    isPrivate: true,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt3',
    numberOfConfigurations: 5,
    isPrivate: true,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt4',
    numberOfConfigurations: 3,
    isPrivate: true,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt5',
    numberOfConfigurations: 1,
    isPrivate: true,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt6',
    numberOfConfigurations: 1,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt7',
    numberOfConfigurations: 9,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt8',
    numberOfConfigurations: 112,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt9',
    numberOfConfigurations: 1,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt10',
    numberOfConfigurations: 22,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt1',
    numberOfConfigurations: 2,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt12',
    numberOfConfigurations: 3,
    isPrivate: true,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt13',
    numberOfConfigurations: 4,
    isPrivate: true,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt14',
    numberOfConfigurations: 8,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt51',
    numberOfConfigurations: 7,
    isPrivate: true,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt1',
    numberOfConfigurations: 69,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt2',
    numberOfConfigurations: 1,
    isPrivate: true,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt3',
    numberOfConfigurations: 5,
    isPrivate: true,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt4',
    numberOfConfigurations: 3,
    isPrivate: true,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt5',
    numberOfConfigurations: 1,
    isPrivate: true,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt6',
    numberOfConfigurations: 1,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt7',
    numberOfConfigurations: 9,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt8',
    numberOfConfigurations: 112,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt9',
    numberOfConfigurations: 1,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt10',
    numberOfConfigurations: 22,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt1',
    numberOfConfigurations: 2,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt12',
    numberOfConfigurations: 3,
    isPrivate: true,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt13',
    numberOfConfigurations: 4,
    isPrivate: true,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt14',
    numberOfConfigurations: 8,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt51',
    numberOfConfigurations: 7,
    isPrivate: true,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt1',
    numberOfConfigurations: 69,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt2',
    numberOfConfigurations: 1,
    isPrivate: true,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt3',
    numberOfConfigurations: 5,
    isPrivate: true,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt4',
    numberOfConfigurations: 3,
    isPrivate: true,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt5',
    numberOfConfigurations: 1,
    isPrivate: true,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt6',
    numberOfConfigurations: 1,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt7',
    numberOfConfigurations: 9,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt8',
    numberOfConfigurations: 112,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt9',
    numberOfConfigurations: 1,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt10',
    numberOfConfigurations: 22,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt1',
    numberOfConfigurations: 2,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt12',
    numberOfConfigurations: 3,
    isPrivate: true,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt13',
    numberOfConfigurations: 4,
    isPrivate: true,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt14',
    numberOfConfigurations: 8,
    isPrivate: false,
  },
  {
    id: '728ed52f',
    projectName: 'Projekt51',
    numberOfConfigurations: 7,
    isPrivate: true,
  },
];

export default function ProjectPage() {
  return (
    <div className="">
      <ProjectTable columns={columns} data={data} filterBy="projectName" />
    </div>
  );
}
