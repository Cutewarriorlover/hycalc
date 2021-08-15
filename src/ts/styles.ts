export const selectStyles = {
  menu: (provided: object, state: { isSelected: boolean }) => ({
    ...provided,

    backgroundColor: "#454863",
  }),
  control: (provided: object, state: { isSelected: boolean }) => ({
    ...provided,

    backgroundColor: "#303245",
    border: "none",
    borderRadius: 12,
    padding: "8px 10px 0",
    marginTop: 40,
  }),
  singleValue: (provided: object, state: { isSelected: boolean }) => ({
    ...provided,

    color: "#eee",
  }),
  placeholder: (provided: object, state: { isSelected: boolean }) => ({
    ...provided,

    color: "#65657b",
  }),
  option: (provided: object, state: { isSelected: boolean }) => ({
    ...provided,

    ":hover": {
      backgroundColor: "#454863",
    },

    borderBottom: "1px solid #434343",
    color: state.isSelected ? "#bbb" : "#eee",
    backgroundColor: "#303245",
    padding: 10,
  }),
};
