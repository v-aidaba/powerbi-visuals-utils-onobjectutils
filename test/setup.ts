import powerbiApiMock from "./mocks/powerbiApiMock";

// Sources reference the ambient `powerbi` namespace for enum values, which does not exist at runtime.
(globalThis as unknown as { powerbi: unknown }).powerbi = powerbiApiMock;
