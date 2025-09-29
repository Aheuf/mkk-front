import type { Meta, StoryObj } from "@storybook/react-vite";
import Required from ".";

const meta: Meta<typeof Required> = {
  component: Required,
  title: "component/Form/Required",
  tags:["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Required>;

export const Basic: Story = {
  render: () => <Required/>
};