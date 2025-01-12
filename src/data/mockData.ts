import { Topic } from '../models'; 

export const initialTopics: Topic[] = [
  {
    id: '1',
    title: 'UIKit Basics',
    description: 'UIKit es el framework fundamental para construir interfaces de usuario en iOS. Proporciona una infraestructura crucial para la construcción de apps iOS, incluyendo manejo de eventos, ciclo de vida de la aplicación y más.',
    codeExample: `
import UIKit

class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Crear una etiqueta
        let label = UILabel(frame: CGRect(x: 50, y: 100, width: 200, height: 40))
        label.text = "¡Hola UIKit!"
        label.textAlignment = .center
        view.addSubview(label)
        
        // Agregar un botón
        let button = UIButton(frame: CGRect(x: 50, y: 160, width: 200, height: 40))
        button.setTitle("Presióname", for: .normal)
        button.backgroundColor = .systemBlue
        button.addTarget(self, action: #selector(buttonTapped), for: .touchUpInside)
        view.addSubview(button)
    }
    
    @objc func buttonTapped() {
        print("¡Botón presionado!")
    }
}`,
    useCase: 'Fundamental para crear cualquier aplicación iOS con interfaz gráfica. Se usa para implementar vistas, controles, navegación y gestión de eventos de usuario.',
    commonMistakes: [
      'No llamar a super.viewDidLoad() en la implementación de viewDidLoad',
      'Agregar subvistas antes de que la vista principal esté cargada',
      'No manejar correctamente el ciclo de vida de las vistas',
      'Realizar operaciones pesadas en el hilo principal'
    ],
    quiz: {
      id: '1',
      topicId: '1',
      questions: [
        {
          id: '1',
          text: '¿Cuál es el método que debe llamarse primero en viewDidLoad()?',
          options: [
            'super.viewDidLoad()',
            'self.viewDidLoad()',
            'parent.viewDidLoad()',
            'view.loadSubviews()'
          ],
          correctAnswer: 0
        },
        {
          id: '2',
          text: '¿Dónde deberías agregar subvistas en un UIViewController?',
          options: [
            'En el init()',
            'En viewDidLoad()',
            'En applicationDidFinishLaunching',
            'En didReceiveMemoryWarning()'
          ],
          correctAnswer: 1
        }
      ]
    }
  },
  {
    id: '2',
    title: 'AutoLayout',
    description: 'AutoLayout es el sistema de diseño adaptativo de iOS que permite crear interfaces que se ajustan automáticamente a diferentes tamaños de pantalla y orientaciones.',
    codeExample: `
class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let button = UIButton()
        button.translatesAutoresizingMaskIntoConstraints = false
        button.setTitle("Botón Centrado", for: .normal)
        button.backgroundColor = .systemBlue
        view.addSubview(button)
        
        NSLayoutConstraint.activate([
            button.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            button.centerYAnchor.constraint(equalTo: view.centerYAnchor),
            button.widthAnchor.constraint(equalToConstant: 200),
            button.heightAnchor.constraint(equalToConstant: 50)
        ])
    }
}`,
    useCase: 'Crear interfaces que se adaptan a diferentes tamaños de iPhone y iPad, soportando tanto orientación vertical como horizontal.',
    commonMistakes: [
      'Olvidar establecer translatesAutoresizingMaskIntoConstraints = false',
      'Crear constraints conflictivos',
      'No activar los constraints después de crearlos',
      'Mezclar AutoLayout con frames manuales',
      'Mezclar AutoLayout con frames manuales',
      'Mezclar AutoLayout con frames manuales',
      'Mezclar AutoLayout con frames manuales',
    ],
    quiz: {
      id: '2',
      topicId: '2',
      questions: [
        {
          id: '1',
          text: '¿Qué propiedad debe establecerse en false antes de usar AutoLayout programáticamente?',
          options: [
            'translatesAutoresizingMaskIntoConstraints',
            'usesAutoLayout',
            'enablesAutomaticConstraints',
            'constraintsEnabled'
          ],
          correctAnswer: 0
        },
        {
          id: '2',
          text: '¿Cómo se activan múltiples constraints a la vez?',
          options: [
            'constraints.activate()',
            'NSLayoutConstraint.activateAll()',
            'NSLayoutConstraint.activate()',
            'view.activateConstraints()'
          ],
          correctAnswer: 2
        },
        {
          id: '3',
          text: '¿Cómo se activan múltiples constraints a la vez?',
          options: [
            'constraints.activate()',
            'NSLayoutConstraint.activateAll()',
            'NSLayoutConstraint.activate()',
            'view.activateConstraints()'
          ],
          correctAnswer: 2
        },
        {
          id: '3',
          text: '¿Cómo se activan múltiples constraints a la vez?',
          options: [
            'constraints.activate()',
            'NSLayoutConstraint.activateAll()',
            'NSLayoutConstraint.activate()',
            'view.activateConstraints()'
          ],
          correctAnswer: 2
        }
      ]
    }
  }
];