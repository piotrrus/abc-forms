import { ContentCanvas } from 'pdfmake/interfaces';

export const separateLinePdf: ContentCanvas = {
     canvas: [
          {
               type: 'line',
               lineColor: '#BDBDBD',
               x1: 0,
               y1: 5,
               x2: 840 - 2 * 40,
               y2: 5,
               lineWidth: 1,
          },
     ],
};

export const horizontalLinePdf: ContentCanvas = {
     canvas: [
          {
               type: 'line',
               lineColor: '#BDBDBD',
               x1: 0,
               y1: 5,
               x2: 595 - 2 * 40,
               y2: 5,
               lineWidth: 1,
          },
     ],
};

export const pdfWatermark = { text: 'N A S K', color: '#cccadf', opacity: 0.2, bold: true, italics: false };
