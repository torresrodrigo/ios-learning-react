export const CONCEPTS = [
    {
        id: 'class',
        title: 'Class (Clase)',
        icon: 'class',
        description: 'Una clase en Swift es un tipo de referencia que permite crear objetos con propiedades y métodos.',
        characteristics: [
            {
                title: 'Características Principales',
                points: [
                    'Tipo por referencia',
                    'Soporta herencia y polimorfismo',
                    'Permite deinicializadores (deinit)',
                    'Gestión de memoria mediante ARC',
                    'Identity operator (===)'
                ]
            },
            {
                title: 'Cuándo Usar',
                points: [
                    'Necesitas herencia de clases',
                    'Quieres compartir una instancia',
                    'Necesitas control del ciclo de vida',
                    'Trabajas con frameworks de Cocoa',
                    'Necesitas identidad de referencia'
                ]
            },
            {
                title: 'Mejores Prácticas',
                points: [
                    'Marca las clases como final',
                    'Utiliza weak o unowned',
                    'Implementa protocolos',
                    'Mantén jerarquía simple',
                    'Considera usar struct'
                ]
            }
        ],
        example: {
            title: 'Ejemplo Práctico',
            code: `class Vehicle {
    var brand: String
    var model: String
    
    init(brand: String, model: String) {
        self.brand = brand
        self.model = model
    }
}`,
            explanation: 'Ejemplo básico de una clase con propiedades y un inicializador.'
        },
        metrics: {
            complexity: 7,
            useFrequency: 8,
            learningCurve: 6,
            performance: 7,
            memoryUsage: 6
        },
        quickTips: [
            'Usa clases cuando necesites herencia',
            'Cuidado con los ciclos de retención',
            'Considera el impacto en memoria',
            'Aprovecha el polimorfismo'
        ],
        commonUses: [
            'ViewControllers',
            'Servicios y Managers',
            'Modelos de datos complejos',
            'Objetos que necesitan identidad'
        ]
    },
    {
        id: 'struct',
        title: 'Struct (Estructura)',
        icon: 'struct',
        description: 'Una estructura en Swift es un tipo por valor que encapsula datos y comportamientos relacionados.',
        characteristics: [
            {
                title: 'Características Principales',
                points: [
                    'Tipo por valor',
                    'No soporta herencia',
                    'Inicializador memberwise',
                    'Thread-safe por naturaleza',
                    'Mutabilidad con mutating'
                ]
            },
            {
                title: 'Cuándo Usar',
                points: [
                    'Datos simples e independientes',
                    'Garantizar copias únicas',
                    'Tipos sin identidad única',
                    'Contextos concurrentes',
                    'Modelos de SwiftUI'
                ]
            },
            {
                title: 'Mejores Prácticas',
                points: [
                    'Preferir sobre classes',
                    'Mantener pequeñas',
                    'Usar protocolos',
                    'Aprovechar memberwise',
                    'Considerar costo de copia'
                ]
            }
        ],
        example: {
            title: 'Ejemplo Práctico',
            code: `struct Point {
    var x: Double
    var y: Double
    
    mutating func moveBy(x: Double, y: Double) {
        self.x += x
        self.y += y
    }
}`,
            explanation: 'Ejemplo básico de una estructura con propiedades y un método mutating.'
        },
        metrics: {
            complexity: 5,
            useFrequency: 9,
            learningCurve: 4,
            performance: 9,
            memoryUsage: 8
        },
        quickTips: [
            'Usa structs por defecto',
            'No te preocupes por ARC',
            'Aprovecha Copy-on-Write',
            'Cuida el tamaño de la estructura'
        ],
        commonUses: [
            'Modelos de datos simples',
            'Valores geométricos',
            'Estados de vista',
            'DTOs y Value Objects'
        ]
    }
];
