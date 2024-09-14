import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const QRCodeGenerator = () => {
  const [amount, setAmount] = useState<number | string>("");
  const [qrValue, setQrValue] = useState<string>("");

  // Function to create the QR code value based on the entered amount
  const generateQrCode = (amount: number | string) => {
    const qrData = `THAIQR|Amount:${amount} `;
    return qrData;
  };

  const handleGenerate = () => {
    if (amount && Number(amount) > 0) {
      const qrCodeString = generateQrCode(amount);
      setQrValue(qrCodeString);
    } else {
      alert("Please enter a valid amount");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        backgroundColor: "#000",
        color: "#FFF",
      }}
    >
      <h1>QR Code Generator</h1>
      <p>Enter an amount and generate a QR code</p>

      {/* Input field for the THB amount */}
      <input
        type="number"
        placeholder="THB"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "18px",
          textAlign: "center",
          borderRadius: "5px",
          width: "200px",
          marginBottom: "20px",
        }}
      />

      {/* Generate button */}
      <div>
        <button
          onClick={handleGenerate}
          style={{
            padding: "10px 20px",
            border: "1px solid #FFF",
            backgroundColor: "#333",
            color: "#FFF",
            cursor: "pointer",
            fontSize: "16px",
            borderRadius: "5px",
          }}
        >
          Generate
        </button>
      </div>

      {/* Display QR Code */}
      {qrValue && (
        <div style={{ marginTop: "20px" }}>
          <QRCodeSVG value={qrValue} size={256} />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
