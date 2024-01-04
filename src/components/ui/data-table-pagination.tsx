import { Table } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

function LeftArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="9"
      fill="none"
      viewBox="0 0 7 9"
    >
      <path fill="#818589" d="M6.667.5v8L0 4.5l6.667-4z"></path>
    </svg>
  );
}

function RightArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="9"
      fill="none"
      viewBox="0 0 8 9"
    >
      <path fill="#818589" d="M.667 8.5v-8l6.666 4-6.666 4z"></path>
    </svg>
  );
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const currentPage = table.getState().pagination.pageIndex + 1;

  function PaginationButtons() {
    return (
      <div className="flex">
        {/* previous page */}
        {table.getCanPreviousPage() && (
          <Button
            onClick={() => table.previousPage()}
            className="text-[#818589] bg-white border border-solid border-[#D8D8D8] hover:scale-105 hover:bg-white rounded-none m-0 border-r-0 hover:border font-bold flex items-center"
          >
            {currentPage - 1}
          </Button>
        )}
        {/* current page */}
        <Button className="text-[#818589] bg-gray-200 border border-solid border-[#D8D8D8] hover:scale-105 hover:bg-gray-200 rounded-none m-0 hover:border font-bold flex items-center">
          {currentPage}
        </Button>
        {/* next page */}
        {table.getCanNextPage() && (
          <Button
            className="text-[#818589] bg-white border border-solid border-[#D8D8D8] hover:scale-105 hover:bg-white rounded-none m-0 border-l-0 hover:border font-bold flex items-center"
            onClick={() => table.nextPage()}
          >
            {currentPage + 1}
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center">
          <Button
            variant="ghost"
            className="h-10 w-10 p-0 bg-white border border-solid border-[#D8D8D8] rounded-r-none border-r-0 hover:bg-white hover:border hover:scale-105"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <LeftArrow />
          </Button>
          <PaginationButtons />
          <Button
            variant="ghost"
            className="h-10 w-10 p-0  bg-white border border-solid border-[#D8D8D8] rounded-l-none border-l-0 hover:bg-white hover:border hover:scale-105"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <RightArrow />
          </Button>
        </div>
      </div>
    </div>
  );
}
