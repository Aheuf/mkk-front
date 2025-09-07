import type { Meta, StoryObj } from "@storybook/react-vite";
import PlayerButton, { PLAYER_BUTTON_SIZE, PLAYER_BUTTON_VARIANT } from ".";

const meta: Meta<typeof PlayerButton> = {
  component: PlayerButton,
  title: "component/PlayerButton",
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof PlayerButton>;

export const Plus: Story = {
  render: () => <PlayerButton variant={PLAYER_BUTTON_VARIANT.PLUS} onClick={() => {}} />
};

export const Minus: Story = {
  render: () => <PlayerButton variant={PLAYER_BUTTON_VARIANT.MINUS} onClick={() => {}} />
};

export const Sizes: Story = {
  render: () => <>
    <PlayerButton variant={PLAYER_BUTTON_VARIANT.PLUS} size={PLAYER_BUTTON_SIZE.XL} onClick={() => {}} />
    <PlayerButton variant={PLAYER_BUTTON_VARIANT.PLUS} size={PLAYER_BUTTON_SIZE.MD} onClick={() => {}} />
    <PlayerButton variant={PLAYER_BUTTON_VARIANT.PLUS} size={PLAYER_BUTTON_SIZE.SM} onClick={() => {}} />
  </>
};
