import { useEffect, useState } from "react";
import { VuiBadge, VuiLink } from "../../../lib";
import { VuiTable } from "../../../lib/components/table/Table";
import { createFakePeople } from "./createFakePeople";

type Person = {
  name: string;
  id: string;
  role: string[];
  status: string;
};

const TOTAL_ROWS = 152;
const ROWS_PER_PAGE = 20;
const NUM_PAGES = Math.ceil(TOTAL_ROWS / ROWS_PER_PAGE);
const people: Person[] = createFakePeople(TOTAL_ROWS);

export const Table = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState<Person[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedRows, setSelectedRows] = useState<Person[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Mock request to fetch the rows.
  useEffect(() => {
    setIsLoading(true);
    setSelectedRows([]);
    const timeout = setTimeout(() => {
      const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
      const endIndex = startIndex + ROWS_PER_PAGE;
      setRows(people.slice(startIndex, Math.min(endIndex, people.length - 1)));
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentPage]);

  const columns = [
    {
      name: "name",
      header: {
        isSortable: true,
        render: () => {
          return "Name";
        }
      },
      render: (person: Person) => <VuiLink onClick={() => console.log("Clicked", person.name)}>{person.name}</VuiLink>
    },
    {
      name: "id",
      header: {
        isSortable: true,
        render: () => {
          return "ID";
        }
      }
    },
    {
      name: "role",
      header: {
        render: () => {
          return "Roles";
        }
      },
      render: (person: Person) => {
        return person.role.join(", ");
      }
    },
    {
      name: "status",
      header: {
        isSortable: true,
        render: () => {
          return "Status";
        }
      },
      render: (person: Person) => {
        return <VuiBadge color={person.status === "Active" ? "success" : "neutral"}>{person.status}</VuiBadge>;
      }
    }
  ];

  const actions = [
    {
      label: "Edit",
      onClick: (person: Person) => {
        console.log("Edit", person);
      }
    },
    {
      label: "Delete",
      onClick: (person: Person) => {
        console.log("Delete", person);
      }
    }
  ];

  return (
    <>
      {/* TODO: Encapsulate all of this state in a table hook */}
      {/* TODO: Async searching */}
      {/* TODO: Async sorting */}
      <VuiTable
        isLoading={isLoading}
        columns={columns}
        rows={rows}
        actions={actions}
        currentPage={currentPage}
        numPages={NUM_PAGES}
        onSelectPage={(page) => setCurrentPage(page)}
        selectedRows={selectedRows}
        onSelectRow={(selectedRows) => setSelectedRows(selectedRows)}
        onSort={(column, direction) => console.log("Sort", column, direction)}
        searchValue={searchValue}
        onSearchChange={(search) => setSearchValue(search)}
        bulkActions={[
          {
            label: "Edit",
            onClick: (people: Person[]) => {
              console.log("Edit", people);
            }
          },
          {
            label: "Combine",
            onClick: (people: Person[]) => {
              console.log("Combine", people);
            }
          },
          {
            label: "Delete",
            onClick: (people: Person[]) => {
              console.log("Delete", people);
            }
          }
        ]}
      />
    </>
  );
};
