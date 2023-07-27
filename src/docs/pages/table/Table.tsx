import { useEffect, useState } from "react";
import {
  VuiBadge,
  VuiCopyButton,
  VuiFlexContainer,
  VuiFlexItem,
  VuiLink,
  VuiSpacer,
  VuiText,
  VuiTextColor,
  VuiToggle
} from "../../../lib";
import { VuiTable } from "../../../lib/components/table/Table";
import { createFakePeople } from "./createFakePeople";

type Person = {
  name: string;
  id: string;
  role: string[];
  status: string;
};

const ROWS_PER_PAGE = 20;
const people: Person[] = createFakePeople(152);

export const Table = () => {
  // Demo state
  const [hasContent, setHasContent] = useState(true);

  // Table state
  const [isLoading, setIsLoading] = useState(true);
  const [numPages, setNumPages] = useState(0);
  const [rows, setRows] = useState<Person[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedRows, setSelectedRows] = useState<Person[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Mock request to fetch the rows.
  useEffect(() => {
    setIsLoading(true);
    setSelectedRows([]);
    const timeout = setTimeout(() => {
      const filteredPeople = hasContent
        ? people.filter(({ name }) => {
            return name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
          })
        : [];

      const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
      const endIndex = startIndex + ROWS_PER_PAGE;
      setNumPages(Math.ceil(filteredPeople.length / ROWS_PER_PAGE));
      setRows(filteredPeople.slice(startIndex, Math.min(endIndex, filteredPeople.length - 1)));
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentPage, searchValue, hasContent]);

  const columns = [
    {
      name: "name",
      header: {
        isSortable: true,
        render: () => {
          return "Name";
        }
      },
      render: (person: Person) => (
        <div>
          <div>
            <VuiLink onClick={() => console.log("Clicked", person.name)}>{person.name}</VuiLink>
          </div>

          <div>
            <VuiText size="xs">
              <p>
                <VuiTextColor color="subdued">
                  Nickname: {person.name[0]}-{person.name.split(" ")[1].slice(0, 4)}
                </VuiTextColor>
              </p>
            </VuiText>
          </div>
        </div>
      )
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
        if (person.role.length > 0) {
          return (
            <VuiFlexContainer alignItems="center" spacing="xs" wrap>
              <VuiFlexItem grow={false} shrink={false}>
                {person.role.join(", ")}
              </VuiFlexItem>

              <VuiFlexItem grow={false} shrink={false}>
                <VuiCopyButton
                  size="xs"
                  value={person.role.join(", ")}
                  options={[{ value: person.role.length, label: "Copy number of roles" }]}
                />
              </VuiFlexItem>
            </VuiFlexContainer>
          );
        }
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

  let content;

  if (!isLoading && !searchValue && !rows.length) {
    content = (
      <VuiText>
        <p>
          You don't have any people yet. <VuiLink href="/">Create a person.</VuiLink>
        </p>
      </VuiText>
    );
  }

  return (
    <>
      <VuiToggle label="Has content" checked={hasContent} onChange={(e) => setHasContent(e.target.checked)} />
      <VuiSpacer size="m" />

      {/* TODO: Encapsulate all of this state in a table hook */}
      {/* TODO: Async searching */}
      {/* TODO: Async sorting */}
      <VuiTable
        isLoading={isLoading}
        columns={columns}
        rows={rows}
        content={content}
        actions={actions}
        currentPage={currentPage}
        numPages={numPages}
        onSelectPage={(page) => setCurrentPage(page)}
        selectedRows={selectedRows}
        onSelectRow={(selectedRows) => setSelectedRows(selectedRows)}
        onSort={(column, direction) => console.log("Sort", column, direction)}
        searchValue={searchValue}
        onSearchChange={(search) => {
          setCurrentPage(1);
          setSearchValue(search);
        }}
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
