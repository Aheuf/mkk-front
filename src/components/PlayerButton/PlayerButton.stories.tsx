import type { Meta, StoryObj } from "@storybook/react-vite";
import PlayerButton, { PLAYER_BUTTON_VARIANT } from ".";

const meta: Meta<typeof PlayerButton> = {
  component: PlayerButton,
  title: "component/PlayerButton",
  tags:["autodocs"]
};

export default meta;

type Story = StoryObj<typeof PlayerButton>;

export const Plus: Story = {
  render: () => <PlayerButton variant={PLAYER_BUTTON_VARIANT.PLUS}/>
};

export const Minus: Story = {
  render: () => <PlayerButton variant={PLAYER_BUTTON_VARIANT.MINUS}/>
};