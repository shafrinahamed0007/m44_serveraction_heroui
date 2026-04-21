"use client";
import { CirclePlus } from "@gravity-ui/icons";
// import { Label, ListBox, Select } from "@heroui/react";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  ListBox,
  Select,
} from "@heroui/react";
import React from "react";

const AddTask = ({ createATask }) => {
  return (
    <Modal>
      <Button variant="secondary">Add A Task</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CirclePlus className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Add A Task </Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={createATask} className="flex flex-col gap-4">
                  <TextField className="w-full" name="title" type="text">
                    <Label>Title</Label>
                    <Input placeholder="Enter yout task title" />
                  </TextField>
                  <TextField className="w-full" name="description" type="text">
                    <Label>Description</Label>
                    <Input placeholder="Enter your task description" />
                  </TextField>

                  {/* Priority Select */}
                  <Select name="priority" className="w-[256px]" placeholder="Select one">
                    <Label>Priority</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="low" textValue="low">
                          Low
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="critical" textValue="critical">
                          Critical
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="medium" textValue="medium">
                          Medium
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="high" textValue="high">
                          High
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  {/* Status Select */}
                  <Select name="status" className="w-[256px]" placeholder="Select one">
                    <Label>Status</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="inProgress" textValue="inProgress">
                          In Progress
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="completed" textValue="completed">
                          Completed
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="pending" textValue="pending">
                          Pending
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="todo" textValue="todo">
                          Todo
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                 
                  <TextField className="w-full" name="assignedTo">
                    <Label>Assigned To: </Label>
                    <Input placeholder="Task Assigned To " />
                  </TextField>
                  <Input type="hidden" name="cretedAt" value={new Date().toISOString()} />
                  <Modal.Footer>
                    <Button CirclePlus variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" CirclePlus>
                      Submit Task
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default AddTask;
