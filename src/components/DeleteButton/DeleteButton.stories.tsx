import type { Meta, StoryObj } from "@storybook/react-vite";
import DeleteButton from ".";

const meta: Meta<typeof DeleteButton> = {
  component: DeleteButton,
  title: "component/DeleteButton",
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof DeleteButton>;

export const Basic: Story = {
  render: () => <DeleteButton onClick={() => {}} />
};
