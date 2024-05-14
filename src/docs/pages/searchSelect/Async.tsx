import { useEffect, useRef, useState } from "react";
import { VuiButtonSecondary, VuiSearchSelect } from "../../../lib";

type Option = { value: string; label: string };

// Simulate a few pages worth of responses.
const optionsResponses = [
  [
    { value: "a1", label: "A1" },
    { value: "b1", label: "B1" },
    { value: "c1", label: "C1" },
    { value: "d1", label: "D1" },
    { value: "e1", label: "E1" },
    { value: "f1", label: "F1" },
    { value: "g1", label: "G1" },
    { value: "h1", label: "H1" },
    { value: "i1", label: "I1" },
    { value: "j1", label: "J1" },
    { value: "k1", label: "K1" },
    { value: "l1", label: "L1" },
    { value: "m1", label: "M1" }
  ],
  [
    { value: "n1", label: "N1" },
    { value: "o1", label: "O1" },
    { value: "p1", label: "P1" },
    { value: "q1", label: "Q1" },
    { value: "r1", label: "R1" },
    { value: "s1", label: "S1" },
    { value: "t1", label: "T1" },
    { value: "u1", label: "U1" },
    { value: "v1", label: "V1" },
    { value: "w1", label: "W1" },
    { value: "x1", label: "X1" },
    { value: "y1", label: "Y1" },
    { value: "z1", label: "Z1" }
  ],
  [
    { value: "a2", label: "A2" },
    { value: "b2", label: "B2" },
    { value: "c2", label: "C2" },
    { value: "d2", label: "D2" },
    { value: "e2", label: "E2" },
    { value: "f2", label: "F2" },
    { value: "g2", label: "G2" },
    { value: "h2", label: "H2" },
    { value: "i2", label: "I2" },
    { value: "j2", label: "J2" },
    { value: "k2", label: "K2" },
    { value: "l2", label: "L2" },
    { value: "m2", label: "M2" }
  ],
  [
    { value: "n2", label: "N2" },
    { value: "o2", label: "O2" },
    { value: "p2", label: "P2" },
    { value: "q2", label: "Q2" },
    { value: "r2", label: "R2" },
    { value: "s2", label: "S2" },
    { value: "t2", label: "T2" },
    { value: "u2", label: "U2" },
    { value: "v2", label: "V2" },
    { value: "w2", label: "W2" },
    { value: "x2", label: "X2" },
    { value: "y2", label: "Y2" },
    { value: "z2", label: "Z2" }
  ]
];

export const Async = () => {
  const pageRef = useRef(0);

  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState(["a1", "b1"]);

  // List of options that grows as we retrieve more pages.
  const [lazyLoadedOptionsList, setLazyLoadedOptionsList] = useState<Array<Option>>([]);
  // List of options limited to those that match a search query.
  const [searchedOptionsList, setSearchedOptionsList] = useState<Array<Option>>([]);
  const [isSearching, setIsSearching] = useState(false);

  const fetchPage = async (newPage: number) => {
    setIsSearching(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLazyLoadedOptionsList((prev) => [...prev, ...optionsResponses[newPage]]);
    setIsSearching(false);
  };

  useEffect(() => {
    fetchPage(pageRef.current);
  }, []);

  useEffect(() => {
    const search = async () => {
      setIsSearching(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = optionsResponses
        .flat()
        .filter((option) => option.label.toLowerCase().includes(searchValue.toLowerCase()));
      setSearchedOptionsList(response);
      setIsSearching(false);
    };

    if (searchValue) {
      search();
    } else {
      setSearchedOptionsList([]);
    }
  }, [searchValue]);

  const asyncSearch = {
    isSearching,
    onSearchChange: (searchValue: string) => {
      setSearchValue(searchValue);
    },
    onLazyLoad: () => {
      if (pageRef.current < optionsResponses.length - 1) {
        pageRef.current++;
        fetchPage(pageRef.current);
      }
    }
  };

  // If there's a search, show the searched list otherwise show the lazy-loaded list.
  const options = searchValue ? searchedOptionsList : lazyLoadedOptionsList;

  const title =
    !lazyLoadedOptionsList.length && isSearching
      ? "Loading"
      : selectedOptions.length
      ? `Selected: ${selectedOptions.length === 1 ? "1 item" : `${selectedOptions.length} items`}`
      : "Select all that apply";

  return (
    <VuiSearchSelect
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      onSelect={(value: string[]) => {
        setSelectedOptions(value);
      }}
      options={options}
      selectedOptions={selectedOptions}
      asyncSearch={asyncSearch}
    >
      <VuiButtonSecondary color="neutral" size="m">
        {title}
      </VuiButtonSecondary>
    </VuiSearchSelect>
  );
};
