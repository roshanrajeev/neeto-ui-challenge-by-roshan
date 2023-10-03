import React from "react";

import { Pane, Toastr, Typography } from "@bigbinary/neetoui";
import { useTranslation } from "react-i18next";
import { v4 as uuid } from "uuid";

import { getTimestampInSeconds } from "components/utils";

import Form from "./Form";

const Create = ({ isOpen, onClose, setNotes }) => {
  const { t } = useTranslation();

  const handleSubmit = formValues => {
    const createdAt = getTimestampInSeconds();
    const assignedContact = formValues.assignedContact.value;

    // TODO: use format [{label, value}] instead of mapping to [label]
    // This will be fixed in a future PR.
    const tags = formValues.tags.map(tag => tag.label);

    const newNote = {
      ...formValues,
      id: uuid(),
      tags,
      createdAt,
      assignedContact,
    };

    setNotes(prev => [newNote, ...prev]);
    Toastr.success(t("toasts.note_added"));
    onClose();
  };

  return (
    <Pane isOpen={isOpen} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("titles.add_new_entity", { entity: "Note" })}
        </Typography>
      </Pane.Header>
      <Form onClose={onClose} onSubmit={handleSubmit} />
    </Pane>
  );
};

export default Create;
