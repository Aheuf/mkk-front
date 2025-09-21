import type { Meta, StoryObj } from "@storybook/react-vite";
import PlayerPanel from ".";
import { PlayerServiceMock } from "../../services/PlayerService/PlayerServiceMock";
import { MemoryRouter } from "react-router";

const meta: Meta<typeof PlayerPanel> = {
  component: PlayerPanel,
  title: "pages/PlayerPanel",
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof PlayerPanel>;


export const Basic: Story = {
  render: () =>
    <MemoryRouter>
      <PlayerPanel playerService={new PlayerServiceMock()}/>
    </MemoryRouter>
}
