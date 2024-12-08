/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Stream` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Stream_id_key" ON "Stream"("id");
