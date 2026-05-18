interface Coordinate {
  lat: number;
  lng: number;
}

interface RouteCoordinates {
  pickup: Coordinate;
  delivery: Coordinate;
}

interface User {
  id: string;
  name: string;
  email: string;
  password?: string; // For in-memory storage and auth checks
}

enum DeliveryStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  DELIVERING = 'DELIVERING',
  COMPLETED = 'COMPLETED'
}

interface Delivery {
  id: string;
  driverId: string;
  clientName: string;
  pickupAddress: string;
  deliveryAddress: string;
  status: DeliveryStatus;
  price: number;
  coordinates: RouteCoordinates;
  createdAt: string; // ISO string format
  completedAt?: string; // ISO string format
}

export {
  Coordinate,
  RouteCoordinates,
  User,
  DeliveryStatus,
  Delivery,
};
