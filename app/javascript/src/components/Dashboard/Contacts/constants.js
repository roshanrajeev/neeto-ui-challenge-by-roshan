import { t } from "i18next";
import * as yup from "yup";

import { buildContactsTableData } from "./utils";

export const CONTACT_FORM_INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const CONTACT_FORM_ROLES = [
  {
    label: "Developer",
    value: "developer",
  },
  {
    label: "Designer",
    value: "designer",
  },
  {
    label: "Manager",
    value: "manager",
  },
  {
    label: "QA Tester",
    value: "qa_tester",
  },
];

export const CONTACT_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required(t("schema.requiredEntity", { entity: "first name" })),
  lastName: yup
    .string()
    .trim()
    .required(t("schema.requiredEntity", { entity: "last name" })),
  email: yup
    .string()
    .email(t("schema.invalidEntity", { entity: "email" }))
    .required(t("schema.requiredEntity", { entity: "assigned contact" })),
  role: yup
    .object()
    .nullable()
    .required(t("schema.requiredEntity", { entity: "role" })),
});

export const CONTACTS_TABLE_DATA = buildContactsTableData();
