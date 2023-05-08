import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Marbella/InputField",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = (args) => (
  <Input data-test-id="InputField-id" {...args} />
);
Primary.args = {
  error: false,
  disabled: false,
  label: "Primary",
};

export const Success: Story = (args) => (
  <Input data-test-id="InputField-id" {...args} />
);
Success.args = {
  error: false,
  success: true,
  disabled: false,
  label: "Success",
};

export const Error: Story = (args) => (
  <Input data-test-id="InputField-id" {...args} />
);
Error.args = {
  error: true,
  disabled: false,
  message: "Error",
};

export const Disabled: Story = (args) => (
  <Input data-test-id="InputField-id" {...args} />
);
Disabled.args = {
  disabled: true,
  label: "Disabled",
};
