export const selectStyles = {
  menu: (provided: object, state: any) => ({
    ...provided,

    backgroundColor: "#454863",
  }),
  control: (provided: object, state: any) => ({
    ...provided,

    backgroundColor: "#303245",
    border: "none",
    borderRadius: 12,
    padding: "8px 10px 0",
  }),
  singleValue: (provided: object, state: any) => ({
    ...provided,

    color: "#eee",
  }),
  placeholder: (provided: object, state: any) => ({
    ...provided,

    color: "#65657b",
  }),
  input: (provided: object, state: any) => ({
    ...provided,

    color: "#eee",
  }),
  option: (provided: object, state: any) => ({
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
