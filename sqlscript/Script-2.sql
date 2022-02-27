DROP SCHEMA public;

CREATE SCHEMA public AUTHORIZATION postgres;

COMMENT ON SCHEMA public IS 'standard public schema';

-- DROP SEQUENCE public.user_id_seq;

CREATE SEQUENCE public.user_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.user_id_seq OWNER TO postgres;
GRANT ALL ON SEQUENCE public.user_id_seq TO postgres;
-- public.users definition

-- Drop table

-- DROP TABLE public.users;

CREATE TABLE public.users (
	id int4 NOT NULL DEFAULT nextval('user_id_seq'::regclass),
	"name" varchar(15) NOT NULL,
	laps json NOT NULL,
	fecha_creacion timestamp NOT NULL DEFAULT now(),
	CONSTRAINT user_pkey PRIMARY KEY (id)
);

-- Permissions

ALTER TABLE public.users OWNER TO postgres;
GRANT ALL ON TABLE public.users TO postgres;




-- Permissions

GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;

INSERT INTO public.users ("name",laps,fecha_creacion) VALUES
	 ('Pedrito','["00:02:6","00:02:1","00:01:4","00:00:6"]','2022-02-27 05:47:58.495148'),
	 ('Jose','["00:03:9","00:02:0","00:00:6"]','2022-02-27 05:48:21.062035');