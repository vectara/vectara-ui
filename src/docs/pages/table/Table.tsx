import { useState } from "react";
import { VuiBadge, VuiButtonSecondary, VuiLink, VuiSpacer } from "../../../lib";
import { VuiTable } from "../../../lib/components/table/Table";
import { createFakePeople } from "./createFakePeople";

type Person = {
  name: string;
  id: string;
  role: string[];
  status: string;
};

const rows: Person[] = createFakePeople(100);

export const Table = () => {
  const [selectedRows, setSelectedRows] = useState<Person[]>([]);
  const [page, setPage] = useState(1);

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
      {/* TODO: Async loading and refresh button */}
      {/* TODO: Searching */}
      <VuiButtonSecondary color="danger">Delete {selectedRows.length} selected people</VuiButtonSecondary>

      <VuiSpacer size="s" />

      <VuiTable
        columns={columns}
        rows={rows}
        actions={actions}
        rowsPerPage={10}
        page={page}
        numPages={4}
        onSelectPage={(page) => setPage(page)}
        selectedRows={selectedRows}
        onSelectRow={(selectedRows) => setSelectedRows(selectedRows)}
        onSort={(column, direction) => console.log("Sort", column, direction)}
      />
    </>
  );
};
