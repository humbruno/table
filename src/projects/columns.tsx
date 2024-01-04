import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { MoveRight, Archive, Trash2 } from 'lucide-react';
import { TableCell } from '@/components/ui/table';

export type Project = {
  id: string;
  projectName: string;
  numberOfConfigurations: number;
  isPrivate?: boolean;
};

const columnHelper = createColumnHelper<Project>();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const columns: ColumnDef<Project, any>[] = [
  columnHelper.accessor('projectName', {
    cell: (info) => (
      <TableCell className="text-left capitalize font-bold text-[#4C4C4C]">
        {info.getValue()}
      </TableCell>
    ),
  }),
  columnHelper.accessor('numberOfConfigurations', {
    cell: (info) => (
      <TableCell className="text-left capitalize text-[#4C4C4C]">
        {`${info.getValue()} Konfigurationen`}
      </TableCell>
    ),
  }),
  columnHelper.accessor('isPrivate', {
    cell: (info) => (
      <TableCell className="flex items-center gap-2 font-bold text-[#4C4C4C]">
        <Checkbox
          id="private"
          checked={info.getValue()}
          onCheckedChange={(e) => console.log(e)}
        />
        <label htmlFor="private">Privat</label>
      </TableCell>
    ),
  }),
  columnHelper.display({
    id: 'archive',
    cell: (info) => (
      <TableCell>
        <Button
          className="text-[#2F60AC] flex items-center gap-2 font-bold"
          variant={'ghost'}
          onClick={() => {
            console.log('ARCHIVE! ', info.row.original.projectName);
            console.log(info);
          }}
        >
          <Archive />
          Archivieren
        </Button>
      </TableCell>
    ),
  }),
  columnHelper.display({
    id: 'delete',
    cell: (info) => (
      <TableCell className="flex text-right justify-end">
        <Button
          className="text-[#2F60AC] flex items-center gap-2 font-bold"
          variant={'ghost'}
          onClick={() => console.log('DELETE! ', info.row.original.projectName)}
        >
          <Trash2 />
          Löschen
        </Button>
      </TableCell>
    ),
  }),
  columnHelper.display({
    id: 'openProject',
    cell: (info) => (
      <TableCell className="text-right">
        <Button
          variant={'ghost'}
          title="open"
          onClick={() => console.log('OPEN! ', info.row.original.projectName)}
        >
          <MoveRight size={20} strokeWidth={2.25} className="text-[#2F60AC]" />
        </Button>
      </TableCell>
    ),
  }),
];
