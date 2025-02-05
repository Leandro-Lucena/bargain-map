import { View, Text } from "react-native";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";
import { s } from "./styles";
import { Step } from "../step";

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Veja os benefícios!</Text>
      <Step
        icon={IconMapPin}
        title="Encontre estabelecimentos"
        description="Veja locais perto de você que são parceiros do Bargain Map"
      />
      <Step
        icon={IconQrcode}
        title="Ative o cupom com QR Code"
        description="Escaneie o código no estabelecimento para usar o benefício"
      />
      <Step
        icon={IconTicket}
        title="Garanta as vantagens perto de você"
        description="Ative cupons onde estiver, em diferentes estabelecimentos perto de você"
      />
    </View>
  );
}
