export const initialTopics = [
    {
        id: '1',
        title: 'UIKit Basics',
        description: 'UIKit es el framework fundamental...',
        codeExample: `// Código de ejemplo`,
        useCase: 'Fundamental para crear cualquier aplicación...',
        commonMistakes: [
            'No llamar a super.viewDidLoad()...',
            'Agregar subvistas antes de que...',
            'No manejar correctamente el ciclo...',
            'Realizar operaciones pesadas...',
        ],
        quiz: {
            id: '1',
            topicId: '1',
            questions: [
                {
                    id: '1',
                    text: '¿Cuál es el método que...',
                    options: ['super.viewDidLoad()', 'self.viewDidLoad()', 'parent.viewDidLoad()', 'view.loadSubviews()'],
                    correctAnswer: 0,
                },
                {
                    id: '2',
                    text: '¿Dónde deberías agregar...',
                    options: ['En el init()', 'En viewDidLoad()', 'En applicationDidFinishLaunching', 'En didReceiveMemoryWarning()'],
                    correctAnswer: 1,
                },
            ],
        },
    },
    {
        id: '2',
        title: 'AutoLayout',
        description: 'AutoLayout es el sistema...',
        codeExample: `// Otro ejemplo de código`,
        useCase: 'Crear interfaces que...',
        commonMistakes: ['Olvidar establecer...', 'Crear constraints conflictivos', 'No activar los constraints...', 'Mezclar AutoLayout...'],
        quiz: {
            id: '2',
            topicId: '2',
            questions: [
                {
                    id: '1',
                    text: '¿Qué propiedad...',
                    options: ['translatesAutoresizingMaskIntoConstraints', 'usesAutoLayout', 'enablesAutomaticConstraints', 'constraintsEnabled'],
                    correctAnswer: 0,
                },
                {
                    id: '2',
                    text: '¿Cómo se activan...',
                    options: ['constraints.activate()', 'NSLayoutConstraint.activateAll()', 'NSLayoutConstraint.activate()', 'view.activateConstraints()'],
                    correctAnswer: 2,
                },
            ],
        },
    },
];
