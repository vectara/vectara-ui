import { useState } from "react";
import { VuiBadge, VuiCopyButton, VuiFlexContainer, VuiFlexItem, VuiLink, VuiText, VuiTextColor } from "../../../lib";
import { VuiTable } from "../../../lib/components/table/Table";

type Person = {
  name: string;
  id: string;
  role: string[];
  status: string;
};

export const Empty = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

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
            <VuiFlexContainer alignItems="center" spacing="s">
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

  return (
    <>
      {/* TODO: Encapsulate all of this state in a table hook */}
      {/* TODO: Async searching */}
      {/* TODO: Async sorting */}
      <VuiTable
        isLoading={false}
        columns={columns}
        rows={[]}
        actions={actions}
        onSelectPreviousPage={currentPage > 1 ? () => setCurrentPage(currentPage - 1) : undefined}
        onSelectNextPage={currentPage < 0 ? () => setCurrentPage(currentPage + 1) : undefined}
        selectedRows={[]}
        onSelectRow={() => undefined}
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
        emptyState={
          <VuiText>
            <p>
              You don't have any people yet. <VuiLink href="/">Create a person.</VuiLink>
            </p>
          </VuiText>
        }
      />
    </>
  );
};
