export const generateQrCode = async (qrLink) => {
  const res = await fetch(
    `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrLink}`
  );
  if (!res.ok) {
    throw new Error("Error occur when generating QR code!");
  }
  res.status(200).json();
};
