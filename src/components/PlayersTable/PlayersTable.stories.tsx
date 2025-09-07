import type { Meta, StoryObj } from "@storybook/react-vite";
import PlayersTable from ".";
import { ROLE } from "../../constant";

const meta: Meta<typeof PlayersTable> = {
    component: PlayersTable,
    title: "component/PlayersTable",
    tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof PlayersTable>;

export const Basic: Story = {
    render: () => (
        <div style={{ backgroundColor: "#212121", padding: 20 }}>
            <PlayersTable players={[
                { prenom: "Bob", nom: "Leponge", password: "", pv: 3, role: ROLE.PLAYER, username: "bob" },
                { prenom: "Patrick", nom: "Etoile", password: "", pv: 2, role: ROLE.PLAYER, username: "patrick" },
                { prenom: "Fabien", nom: "Fresse", password: "", pv: 2, role: ROLE.PLAYER, username: "fabinou" }
            ]} onClickPlayerHp={() => { }} />
        </div>)
};
