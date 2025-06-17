-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL,
    "Task_Title" TEXT NOT NULL,
    "Taksk_Description" TEXT NOT NULL,
    "Task_Is_Complete" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);
