import TokenPocket from "./icons/TokenPocket";
import WalletConnect from "./icons/WalletConnect";
import BinanceChain from "./icons/BinanceChain";
import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "TokenPocket",
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
  },
  {
    title: "Tron Link Wallet",
    icon: BinanceChain,
    connectorId: ConnectorNames.TRON,
  },
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";
