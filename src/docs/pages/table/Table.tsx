import { useEffect, useState } from "react";
import {
  VuiBadge,
  VuiCopyButton,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon,
  VuiLink,
  VuiSpacer,
  VuiText,
  VuiTextColor,
  VuiToggle
} from "../../../lib";
import { VuiTable } from "../../../lib/components/table/Table";
import { createFakePeople } from "./createFakePeople";
import { BiError } from "react-icons/bi";

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
  const [hasError, setHasError] = useState(false);
  const [hasData, setHasData] = useState(true);
  const [hasPager, setHasPager] = useState(true);
  const [canSelectRows, setCanSelectRows] = useState(true);
  const [canSearch, setCanSearch] = useState(true);
  const [areNicknamesVisible, setAreNicknamesVisible] = useState(false);

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
      const filteredPeople = hasData
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
  }, [currentPage, searchValue, hasData]);

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

          {areNicknamesVisible && (
            <div>
              <VuiText size="xs">
                <p>
                  <VuiTextColor color="subdued">
                    Nickname: {person.name[0]}-{person.name.split(" ")[1].slice(0, 4)}
                  </VuiTextColor>
                </p>
              </VuiText>
            </div>
          )}
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

  if (hasError) {
    content = (
      <>
        <VuiFlexItem grow={false}>
          <VuiIcon color="danger">
            <BiError />
          </VuiIcon>
        </VuiFlexItem>

        <VuiFlexItem grow={false}>
          <VuiText>
            <p>
              <VuiTextColor color="danger">Couldn't retrieve data</VuiTextColor>
            </p>
          </VuiText>
        </VuiFlexItem>
      </>
    );
  } else if (!isLoading && !searchValue && !rows.length) {
    content = (
      <VuiText>
        <p>
          You don't have any people yet. <VuiLink href="/">Create a person.</VuiLink>
        </p>
      </VuiText>
    );
  }

  const selection = canSelectRows
    ? {
        selectedRows,
        onSelectRow: (selectedRows: Person[]) => setSelectedRows(selectedRows),
        bulkActions: [
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
        ]
      }
    : undefined;

  const search = canSearch
    ? {
        searchValue,
        searchPlaceholder: "Search people",
        onSearchChange: (search: string) => {
          setCurrentPage(1);
          setSearchValue(search);
        }
      }
    : undefined;

  const pagination = hasPager
    ? {
        onSelectPreviousPage: currentPage > 1 ? () => setCurrentPage(currentPage - 1) : undefined,
        onSelectNextPage: currentPage < numPages ? () => setCurrentPage(currentPage + 1) : undefined
      }
    : {
        currentPage: currentPage,
        numPages: numPages,
        onSelectPage: (page: number) => setCurrentPage(page)
      };

  return (
    <>
      <VuiToggle label="Has error" checked={hasError} onChange={(e) => setHasError(e.target.checked)} />
      <VuiToggle label="Has data" checked={hasData} onChange={(e) => setHasData(e.target.checked)} />
      <VuiToggle label="Has pager" checked={hasPager} onChange={(e) => setHasPager(e.target.checked)} />
      <VuiToggle label="Can select rows" checked={canSelectRows} onChange={(e) => setCanSelectRows(e.target.checked)} />
      <VuiToggle label="Can search" checked={canSearch} onChange={(e) => setCanSearch(e.target.checked)} />
      <VuiToggle
        label="Show nicknames"
        checked={areNicknamesVisible}
        onChange={(e) => setAreNicknamesVisible(e.target.checked)}
      />
      <VuiSpacer size="m" />

      {/* TODO: Encapsulate search and sort state in a table hook that can be configured with a fetch callback */}
      {/* TODO: Async sorting */}

      <VuiTable
        isLoading={isLoading}
        columns={columns}
        rows={rows}
        content={content}
        actions={actions}
        pagination={pagination}
        selection={selection}
        onSort={(column, direction) => console.log("Sort", column, direction)}
        search={search}
      />
    </>
  );
};
