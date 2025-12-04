"use client";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Image from "next/image";

export default function DownloadInvoice({ booking }) {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("IDrooms - Booking Invoice", 14, 20);

    doc.setFontSize(12);
    doc.text(`Booking ID: ${booking.id}`, 14, 30);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 37);

    autoTable(doc, {
      startY: 45,
      head: [["Field", "Details"]],
      body: [
        ["Hotel Name", booking.hotelName],
        ["Location", booking.location],
        ["Room Type", booking.roomType],
        ["Guests", booking.guests],
        ["Check-in", booking.checkin],
        ["Check-out", booking.checkout],
        ["Nights", booking.nights],
      ],
    });

    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 10,
      head: [["Charges", "Amount"]],
      body: [
        ["Room Price", `₹${booking.price}`],
        ["Taxes & Fees", `₹${booking.taxes}`],
        ["Discount", `-₹${booking.discount}`],
        ["Total Paid", `₹${booking.total}`],
      ],
    });

    doc.setFontSize(10);
    doc.text(
      "Thank you for booking with IDrooms. For support, contact support@idrooms.com",
      14,
      doc.internal.pageSize.height - 10
    );

    doc.save(`IDrooms-Invoice-${booking.id}.pdf`);
  };

  return (
    <button
      className="bg-red-900 text-white px-6 py-3 rounded-lg flex items-center gap-2"
      onClick={generatePDF}
    >
      📄 Download Invoice
    </button>
  );
}
