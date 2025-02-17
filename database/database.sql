CREATE DATABASE firstapi;

CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefono VARCHAR(15),
    direccion TEXT
);


CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    cliente_id INT NOT NULL,
    fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10,2) NOT NULL,
    estado VARCHAR(20) CHECK (estado IN ('pendiente', 'enviado', 'entregado', 'cancelado')),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE
);

INSERT INTO clientes (nombre, email, telefono, direccion) VALUES
('Juan Pérez', 'juan.perez@email.com', '3001234567', 'Calle 123 #45-67, Bogotá'),
('María Gómez', 'maria.gomez@email.com', '3107654321', 'Carrera 12 #34-56, Medellín'),
('Carlos Rodríguez', 'carlos.rod@email.com', '3209876543', 'Avenida 7 #89-10, Cali'),
('Ana Martínez', 'ana.martinez@email.com', '3501122334', 'Calle 50 #20-30, Barranquilla'),
('Luis Fernández', 'luis.fernandez@email.com', NULL, 'Carrera 15 #10-25, Cartagena');

INSERT INTO pedidos (cliente_id, total, estado) VALUES
(1, 150.75, 'pendiente'),  -- Pedido de Juan Pérez
(2, 200.50, 'enviado'),    -- Pedido de María Gómez
(3, 320.00, 'entregado'),  -- Pedido de Carlos Rodríguez
(4, 180.00, 'cancelado'),  -- Pedido de Ana Martínez
(5, 275.00, 'pendiente');  -- Pedido de Luis Fernández