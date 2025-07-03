import type { Meta, StoryObj } from "@storybook/react-vite";
import SwitchInput from ".";

const meta: Meta<typeof SwitchInput> = {
  component: SwitchInput,
  title: "component/InputSwitch",
  tags:["autodocs"]
};

export default meta;

type Story = StoryObj<typeof SwitchInput>;

const stubedOptions: [string, string] = ["Option A", "Option B"];

export const Basic: Story = {
  render: () => (
    <SwitchInput
      options={stubedOptions}
      onChange={(selectedValue) => console.log(selectedValue)}
    />
  ),
};

export const WithDefaultA: Story = {
  render: () => (
    <SwitchInput
      options={stubedOptions}
      defaultValue={stubedOptions[0]}
      onChange={(selectedValue) => console.log(selectedValue)}
    />
  ),
};

export const WithDefaultB: Story = {
  render: () => (
    <SwitchInput
      options={stubedOptions}
      defaultValue={stubedOptions[1]}
      onChange={(selectedValue) => console.log(selectedValue)}
    />
  ),
};
