import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createInquiry } from '../../redux/actions/inquiry/createInquiry';
import { motion, AnimatePresence } from 'framer-motion';
import type { AppDispatch } from '../../redux/store';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string;
}

const ContactModal = ({ isOpen, onClose: onCloseProp, selectedPlan }: ContactModalProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClose = () => {
    setIsSubmitted(false); //  Reinicia el estado de "enviado"
    onCloseProp();        // Llama a la función del padre
  };

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
    .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Solo se permiten letras y espacios")
    .required("El nombre es obligatorio"),
    email: Yup.string()
    .email('Correo inválido')
    .required('Requerido'),
    phone: Yup.string()
    .length(9, "El teléfono debe tener 9 caracteres")
    .matches(/^9\d{8}$/, "El teléfono debe comenzar con 9 y contener solo números")
    .optional(),
    message: Yup.string().min(10, 'Mínimo 10 caracteres').required('Requerido'),
  });

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      await dispatch(createInquiry({
        ...values,
        selectedPlan,
      }));
      setIsSubmitted(true);
      } catch (err) {
      console.error(err);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          className="bg-white rounded-xl shadow-xl w-full max-w-md p-6"
          onClick={e => e.stopPropagation()}
        >
          {!isSubmitted ? (
            <>
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-xl font-bold text-almost-black">
                  Cotizar: <span className="text-electric-blue">{selectedPlan}</span>
                </h3>
                <button
                  onClick={handleClose}
                  className="text-gray-500 hover:text-gray-800 text-2xl"
                  aria-label="Cerrar"
                >
                  &times;
                </button>
              </div>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
                      <Field
                        name="name"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:outline-none"
                        placeholder="Tu nombre"
                      />
                      <ErrorMessage name="name" component="p" className="text-red-500 text-xs mt-1" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Correo *</label>
                      <Field
                        name="email"
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:outline-none"
                        placeholder="tu@correo.com"
                      />
                      <ErrorMessage name="email" component="p" className="text-red-500 text-xs mt-1" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Celular</label>
                      <Field
                        name="phone"
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:outline-none"
                        placeholder="987 654 321"
                      />
                      <ErrorMessage name="phone" component="p" className="text-red-500 text-xs mt-1" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Consulta *</label>
                      <Field
                        name="message"
                        as="textarea"
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:outline-none"
                        placeholder="Cuéntanos qué necesitas..."
                      />
                      <ErrorMessage name="message" component="p" className="text-red-500 text-xs mt-1" />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 bg-electric-blue text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-70"
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
                    </button>
                  </Form>
                )}
              </Formik>
            </>
          ) : (
            <div className="text-center py-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700 text-xl"
              >
                ✓
              </motion.div>
              <h3 className="text-xl font-bold text-almost-black mb-2">¡Gracias por tu consulta!</h3>
              <p className="text-gray-600 text-sm mb-4">
                Hemos recibido tu mensaje sobre <span className="font-medium">{selectedPlan}</span>.  
                Nos comunicaremos contigo a la brevedad.
              </p>
              <button
                onClick={handleClose}
                className="px-5 py-2 bg-electric-blue text-white rounded-lg hover:bg-blue-700 text-sm"
              >
                Cerrar
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactModal;