"use client";
import { generatePagination } from '@/lib/generatePagination';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react'

const PaginationComponent = ({ totalPages }: { totalPages: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  
  
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
  <div className="inline-flex">
    <div className="flex -space-x-px">
      {allPages.map((page, index) => {
        let position: 'first' | 'last' | 'single' | 'middle' | undefined;

        if (index === 0) position = 'first';
        if (index === allPages.length - 1) position = 'last';
        if (allPages.length === 1) position = 'single';
        if (page === '...') position = 'middle';

        return (
          <PaginationNumber
            key={`${page}-${index}`}
            href={createPageURL(page)}
            page={page}
            position={position}
            isActive={currentPage === page}
          />
        );
      })}
    </div>
  </div>
  )
}

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: 'first' | 'last' | 'middle' | 'single';
  isActive: boolean;
}) {
  const className = clsx(
    'flex h-10 w-10 items-center justify-center text-sm border',
    {
      'rounded-l-md': position === 'first' || position === 'single',
      'rounded-r-md': position === 'last' || position === 'single',
      'z-10 bg-blue-600 border-blue-600 text-white': isActive,
      'hover:bg-gray-100': !isActive && position !== 'middle',
      'text-gray-300': position === 'middle',
    },
  );

  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

export default PaginationComponent