import { ProjectTable } from '@/projects/project.table';
import { Payment, columns } from './columns';

export default function DemoPage() {
  const data: Payment[] = [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '489e1d42',
      amount: 125,
      status: 'processing',
      email: 'example@gmail.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '489e1d42',
      amount: 125,
      status: 'processing',
      email: 'example@gmail.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '489e1d42',
      amount: 125,
      status: 'processing',
      email: 'example@gmail.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '489e1d42',
      amount: 125,
      status: 'processing',
      email: 'example@gmail.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '489e1d42',
      amount: 125,
      status: 'processing',
      email: 'example@gmail.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '489e1d42',
      amount: 125,
      status: 'processing',
      email: 'example@gmail.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '489e1d42',
      amount: 125,
      status: 'processing',
      email: 'example@gmail.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '489e1d42',
      amount: 125,
      status: 'processing',
      email: 'example@gmail.com',
    },
  ];

  return <ProjectTable columns={columns} data={data} filterBy="email" />;
}
