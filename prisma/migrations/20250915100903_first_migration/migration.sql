-- CreateTable
CREATE TABLE "public"."Link" (
    "id" SERIAL NOT NULL,
    "handle" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "linktext" TEXT NOT NULL,
    "pic" TEXT NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Link_handle_key" ON "public"."Link"("handle");
