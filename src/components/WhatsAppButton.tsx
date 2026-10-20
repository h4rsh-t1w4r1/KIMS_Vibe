'use client';

import { motion } from 'framer-motion';

export interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

export function WhatsAppButton({
  phoneNumber,
  message = 'Hi, I would like to inquire about services at KIMS Hospital',
  className = '',
  children = 'Inquire Now',
}: WhatsAppButtonProps) {
  // Clean phone number for URL
  const cleanPhone = phoneNumber.replace(/[^0-9+]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-primary ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`WhatsApp KIMS Hospital: ${message}`}
    >
      {children}
    </motion.a>
  );
}

export default WhatsAppButton;
