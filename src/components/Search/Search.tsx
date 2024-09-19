// mantine
import { Combobox, Container, InputBase, useCombobox } from "@mantine/core";

// styles
import { useContext, useState } from "react";
import { LocalStorageNotesContext } from "@context/LocalStorageNotesContext";
import { Link } from "react-router-dom";

export function Search() {
  const { notes } = useContext(LocalStorageNotesContext);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const shouldFilterOptions = notes.every((item) => {
    return item.label !== search;
  });

  const filteredOptions = shouldFilterOptions
    ? notes.filter((item) =>
        item.label.toLowerCase().includes(search.toLowerCase().trim())
      )
    : notes;

  const options = filteredOptions.map((item) => (
    <Link to={`/notes/${item.id}`} key={item.id}>
      <Combobox.Option value={item.label}>{item.label}</Combobox.Option>
    </Link>
  ));

  return (
    <Container mb={15}>
      <Combobox
        store={combobox}
        withinPortal={false}
        onOptionSubmit={(val) => {
          setValue(val);
          setSearch(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <InputBase
            rightSection={<Combobox.Chevron />}
            value={search}
            onChange={(event) => {
              combobox.openDropdown();
              combobox.updateSelectedOptionIndex();
              setSearch(event.currentTarget.value);
            }}
            onClick={() => combobox.openDropdown()}
            onFocus={() => combobox.openDropdown()}
            onBlur={() => {
              combobox.closeDropdown();
              setSearch(value || "");
            }}
            placeholder="Search value"
            rightSectionPointerEvents="none"
          />
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>
            {options.length > 0 ? (
              options
            ) : (
              <Combobox.Empty>Nothing found</Combobox.Empty>
            )}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </Container>
  );
}
