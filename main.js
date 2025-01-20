import express from 'express';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const app = express();

// Fecha de inicio del contador
const startDate = new Date(2024, 0, 30); // January is 0 in JavaScript

app.get('/', (req, res) => {
    // Fecha actual
    const currentDate = new Date();

    // Calcula la diferencia en días
    const delta = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
    const daysPassed = delta;

    // Formatear la fecha en español
    const startDateStr = format(startDate, 'PPP', { locale: es });

    // Renderiza el archivo HTML con las variables
    res.render('index', { days_passed: daysPassed, start_date: startDateStr });
});

const PORT = 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
